class BookController < ApplicationController
  # respond_to :html, :json
  def create
    @book = Book.new(book_params)

    if @book.save
      # respond_to do |format|
      #   format.html
        render json: @book, status: :created
      # end
    end
  end

  def index
    @book = Book.all
    respond_to do |format|
      format.html
      format.json { render :json => @book}
    end
  end

  private
  def book_params
    params.permit(:name)
  end
end
