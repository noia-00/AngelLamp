class RenameOffceCodeColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :offce_code, :office_code
  end
end
