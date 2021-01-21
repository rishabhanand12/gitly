class LinksController < ApplicationController
  before_action :link_params, only: [:create]
  before_action :load_link, only: [:update]

  def index
    links = Link.all
    # debugger
    render status: :ok, json: { data: links }
  end

  def create
    @link = Link.find_or_initialize_by(link_params)
    if @link.new_record?
      @link.short_url = generate_short_url
      if @link.save
        render status: :ok, json: { link: @link }
      else
        render status: :unprocessable_entity, json: { error: @link.errors.messages }
      end
    else
      render status: :ok, json: { data: @link }
    end
  end

  def show
  end

  def update
    if @link.update(link_params)
      render status: ok, json: { notice: 'link updated' }
    else
      render status: :unprocessable_entity, json: { error: @link.errors.messages }
    end
  end

  private

  def link_params
    params.require(:link).permit(:original_url, :pinned, :click_count)
  end

  def load_link
    @link = Link.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: e }
  end

  def generate_short_url
    loop do
      short_url = SecureRandom.urlsafe_base64(5, false)
      break short_url unless Link.exists?(short_url: short_url)
    end
  end
end
