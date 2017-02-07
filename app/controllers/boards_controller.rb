class BoardsController < ApplicationController

  before_action :authenticate_user!
  respond_to :json

  def create
    @board = current_user.boards.new(board_params)

    if @board.save
      render json: @board
    else
      render json: { errors: @board.errors.full_messages, status: :unprocessable_entity }
    end
  end

  def index
    @boards = current_user.boards
    render json: @boards
  end

  def show
    @board = current_user.boards.find_by_id(params[:id]);
    render json: @board.as_json(include: {
      lists: {
        include: {
          cards: {
            include: :children
          }
        }
      }
    })
  end

  def destroy
    @board = current_user.boards.find_by_id(params[:id]);
    if @board.destroy
      render json: @board
    else
      render json: { errors: @board.errors.full_messages, status: :unprocessable_entity }
    end
  end

  private

    def board_params
      params.require(:board).permit(:name)
    end

end
