class Rooms::MessagesController < ApplicationController
  before_action :set_room, only: [:index]

  def index
    @messages = @room.messages.includes :user
  end

  private
    def set_room
      @room = Room.find params[:room_id]
    end
end
