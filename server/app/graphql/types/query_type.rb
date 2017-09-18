Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # # TODO: remove me
  # field :testField, types.String do
  #   description "An example field added by the generator"
  #   resolve ->(obj, args, ctx) {
  #     "Hello World!"
  #   }
  # end

  field :movie do
    type Types::MovieType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      Movie.find(args[:id])
    }
  end

  field :actor do
    type Types::ActorType
    argument :id, !types.ID
    resolve -> (obj, args, ctx) {
      Actor.find(args[:id])
    }
  end
end
