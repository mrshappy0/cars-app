class CarsController < ApplicationController
    def index
        @cars = Car.all

        render json: @cars

    end

    def create
        @car = Car.create({
            make: params[:make],
            model: params[:model],
            color: params[:color]
        })
        
        redirect_to "http://localhost:5500/cars-frontend"
        # render json: @car
    end
end
