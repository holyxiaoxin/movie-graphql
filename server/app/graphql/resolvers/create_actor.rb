class Resolvers::CreateActor < GraphQL::Function
  # Define `initialize` to store field-level options, eg
  #
  #     field :myField, function: Functions::create_actor.new(type: MyType)
  #
  # attr_reader :type
  # def initialize(type:)
  #   @type = type
  # end

  argument :name, types.String
  argument :bio, types.String

  # add arguments by type:
  # argument :id, !types.ID

  type Types::ActorType

  # Resolve function:
  def call(obj, args, ctx)
    Actor.create!(
      name: args[:name],
      bio: args[:bio],
    )
  end
end
