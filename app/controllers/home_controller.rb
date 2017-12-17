class HomeController < ApplicationController
  def index
    @rooms = current_user.rooms
  end
end
