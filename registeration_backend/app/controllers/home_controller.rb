class HomeController < ApplicationController
  def index
    render json: {msg: "Home"}
  end
end
