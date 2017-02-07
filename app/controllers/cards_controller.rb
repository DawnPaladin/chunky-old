class CardsController < ApplicationController

  before_action :authenticate_user!
  respond_to :json

  def create
    @card = Card.new(card_params)

    if @card.parent_id.is_a? Integer || @card.list.board.user == current_user # FIXME: Verify that an ancestor belongs to current user
      if @card.save
        render json: @card, include: { children: @card.children.to_json }
      else
        render json: { errors: @card.errors.full_messages, status: :unprocessable_entity }
      end
    else
      render json: { errors: @card.errors.full_messages, status: :unauthorized }
    end
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render json: @card, status: 201
    else
      render json: { errors: @card.errors.full_messages, status: :unprocessable_entity }
    end
  end

  def show
    @card = Card.find_by_id(params[:id])
    render json: @card, include: :children
  end

  def card_params
    params.require(:card).permit(:id, :title, :description, :list_id, :created_at, :updated_at, :completed, :order, :parent_id)
  end

end
