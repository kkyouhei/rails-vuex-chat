class HomeController < BaseController
  def index
    @rooms = current_user.rooms
  end
end
