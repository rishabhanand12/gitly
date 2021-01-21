class AddOriginalAndShortUrls < ActiveRecord::Migration[6.1]
  def change
    add_column :links, :original_url, :text, null: false
    add_column :links, :short_url, :string, index: true, null: false
    add_column :links, :pinned, :integer
    add_column :links, :click_counts, :integer, default: 0, null: false
  end
end
