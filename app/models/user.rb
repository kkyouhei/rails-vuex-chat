# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  email            :string(255)      not null
#  crypted_password :string(255)
#  salt             :string(255)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :room_users
  has_many :rooms, through: :room_users
  has_many :messages, inverse_of: :users
end
