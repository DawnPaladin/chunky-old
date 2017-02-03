class BoardsController < ApplicationController

  before_action :authenticate_user!

  def create
    @board = current_user.boards.new(board_params)

    respond_to do |format|
      if @board.save
        format.json { render json: @resource }
      else
        format.json { render json: { errors: @board.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  def index
    @boards = Board.all
    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  private
    def board_params
      require(:board).permit(:name)
    end

end
