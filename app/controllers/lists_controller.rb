class ListsController < ApplicationController

  before_action :authenticate_user!
  respond_to :json

  def show
    @list = List.find_by_id(params[:id])

    render json: @list.to_json(include: :cards)
  end

end
