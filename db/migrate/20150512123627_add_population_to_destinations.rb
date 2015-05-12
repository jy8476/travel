class AddPopulationToDestinations < ActiveRecord::Migration
  def change
    add_column :destinations, :population, :integer
  end
end
