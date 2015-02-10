class HomeController < ApplicationController
  def index
    if user_signed_in? == true
      redirect_to welcome_index_url
    end
  end
end
