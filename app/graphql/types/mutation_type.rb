module Types
  MutationType = GraphQL::ObjectType.define do
    name "Mutation"

    # TODO: Remove me
    field :testField, types.String do
      description "An example field added by the generator"
      resolve ->(obj, args, ctx) {
        "Hello World!"
      }
    end

    field :createMovie, function: Resolvers::CreateMovie.new
    field :createActor, function: Resolvers::CreateActor.new
  end
end
