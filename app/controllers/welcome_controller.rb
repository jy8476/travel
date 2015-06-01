class WelcomeController < ApplicationController
  def index
      @countries = ['New Zealand','Norway','Canada']
  @travel_pics = ['new-zealand.jpg', 'Norway.jpg', 'vancouver.jpg']
  end

  def about
      @color = params[:color]
@size = params[:size].to_i
    end
    def contact    
  end
 end

