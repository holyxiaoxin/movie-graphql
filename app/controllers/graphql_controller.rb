class NotAuthenticatedError < StandardError
end

class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_request!

  rescue_from NotAuthenticatedError, with: :unauthenticated!

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      # current_user: current_user,
    }
    result = ServerSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def http_auth_token
    @http_auth_token ||= if request.headers['Authorization'].present?
                           request.headers['Authorization'].split(' ').last
                         end
  end

  def authenticate_request!
    raise NotAuthenticatedError unless http_auth_token == 'sample_auth_token'
  end

  def unauthenticated!
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end
end
