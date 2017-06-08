class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id

    if @message.save
      # broadcast message after save to DB
      ActionCable.server.broadcast 'messages',
        message: @message.body
        user_id: @message.user_id
      head :ok
    else
      render json: @message.errors.full_messages
    end
  end

  def delete
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatroom_id)
  end
end
