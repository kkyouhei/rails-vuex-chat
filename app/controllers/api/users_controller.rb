class Api::UsersController < ApiController
  def search
    @users = User.where name: params[:name]
    render json: @users
  end
end
