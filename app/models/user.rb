class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :prefecture

  validates :password, format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i }
  with_options presence: true do
    validates :nickname
  end

  with_options numericality: { other_than: 1 } do
    validates :prefecture_id
  end

  validates :office_code, format: { with: /\A\d{0}|\d{10}\z/ }
end
