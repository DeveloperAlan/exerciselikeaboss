class HomeController < ApplicationController
  def index
    if user_signed_in? == false
      redirect_to welcome_index_url
    end
  end
end
