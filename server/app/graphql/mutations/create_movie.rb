class Mutations::CreateMovie < GraphQL::Function
  # arguments passed as "args"
  argument :title, types.String
  argument :year, types.Int

  # return type from the mutation
  type Types::MovieType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context (which would be discussed later)
  def call(_obj, args, _ctx)
    Movie.create!(
      title: args[:title],
      year: args[:year],
    )
  end
end
