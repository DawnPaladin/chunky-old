class BoardsController < ApplicationController

  before_action :authenticate_user!

  def create
    @board = current_user.boards.new(board_params)

    respond_to do |format|
      if @board.save
        format.json { render json: @board.to_json }
      else
        format.json { render json: { errors: @board.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  def index
    @boards = current_user.boards
    respond_to do |format|
      format.json { render json: @boards.to_json }
    end
  end

  def show
    @board = current_user.boards.find_by_id(params[:id]);
    respond_to do |format|
      format.json { render json: @board.to_json }
    end
  end

  private

    def board_params
      params.require(:board).permit(:name)
    end

end
