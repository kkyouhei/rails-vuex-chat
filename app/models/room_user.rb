# == Schema Information
#
# Table name: room_users
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  room_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RoomUser < ApplicationRecord
  belongs_to :user
  belongs_to :room
end
