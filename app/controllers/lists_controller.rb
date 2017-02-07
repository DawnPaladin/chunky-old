class ListsController < ApplicationController

  before_action :authenticate_user!

  def show
    @list = List.find_by_id(params[:id])

    respond_to do |format|
      format.json { render json: @list.to_json(include: :cards) }
    end
  end

end
