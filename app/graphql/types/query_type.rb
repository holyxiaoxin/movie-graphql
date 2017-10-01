module Types
  QueryType = GraphQL::ObjectType.define do
    name "Query"
    description "The query root of this schema"
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

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
      argument :offset, !types.Int
      argument :limit, !types.Int
      resolve -> (obj, args, ctx) {
        Movie.all.offset(args[:offset]).limit(args[:limit])
      }
    end

    field :movies_cursor do
      type types[Types::MovieType]
      argument :cursor, !types.String
      argument :limit, !types.Int
      resolve -> (obj, args, ctx) {
        Movie.all.where('id > ?', args[:cursor]).limit(args[:limit])
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
end
