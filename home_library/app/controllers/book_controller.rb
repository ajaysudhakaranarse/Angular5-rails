class BookController < ApplicationController
  # respond_to :html, :json

  def index
    @book = Book.all
    respond_to do |format|
      format.html
      format.json { render :json => @book}
    end
  end
end
