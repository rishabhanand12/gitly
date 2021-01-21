class AddDefaultToPinned < ActiveRecord::Migration[6.1]
  def change
    change_column_default :links, :pinned, 0
  end
end
