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

  field :top_n_movies do
    type types[Types::MovieType]
    argument :top_n, types.Int
    resolve -> (obj, args, ctx) {
      if args[:top_n].present?
        puts 'Movie.all.limit(args[:top_n])'
        Movie.all.limit(args[:top_n])
      else
        puts 'Movie.all'
        Movie.all
      end
    }
  end

  field :movies_offset do
    type types[Types::MovieType]
    argument :offset, types.Int
    argument :limit, types.Int
    resolve -> (obj, args, ctx) {
      if args[:offset].present? && args[:limit].present?
        Movie.all.offset(args[:offset]).limit(args[:limit])
      else
        Movie.all
      end
    }
  end

  field :movies do
    type types[Types::MovieType]
    argument :year, types.Int
    resolve -> (obj, args, ctx) {
      if args[:year].present?
        Movie.where(year: args[:year])
      else
        Movie.all
      end
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
