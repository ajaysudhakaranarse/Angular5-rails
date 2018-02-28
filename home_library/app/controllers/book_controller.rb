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

  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      render json: @book
    end
  end

  def index
    @book = Book.all
    respond_to do |format|
      format.html
      format.json { render :json => @book}
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  private
  def book_params
    params.permit(:name)
  end
end
