class AddDefaultToClickCounts < ActiveRecord::Migration[6.1]
  def change
    change_column_default :links, :click_counts, 0
  end
end
