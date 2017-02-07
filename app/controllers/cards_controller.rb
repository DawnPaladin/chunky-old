class CardsController < ApplicationController

  before_action :authenticate_user!

  def create
    @card = current_user.cards.new(card_params)

    respond_to do |format|
      if @card.save
        format.json { render json: @card }
      else
        format.json { render json: { errors: @card.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  def update
    @card = Card.find(params[:id])

    respond_to do |format|
      if @card.update(card_params)
        format.json { render json: @card, status: 201 }
      else
        format.json { render json: { errors: @card.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  def card_params
    params.require(:card).permit(:id, :title, :description, :list_id, :created_at, :updated_at)
  end

end
