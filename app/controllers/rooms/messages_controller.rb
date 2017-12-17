class Rooms::MessagesController < ApplicationController
  before_action :set_room, only: [:index, :create]

  def index
    @messages = @room.messages.order(:created_at).includes :user
  end
  
  def create
    @room.messages.create create_params
    redirect_to room_messages_path(@room)
  end

  private
    def create_params
      params.require(:message).permit(:message).merge(user_id: current_user.id)
    end

    def set_room
      @room = Room.find params[:room_id]
    end
end
