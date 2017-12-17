require 'test_helper'

class Rooms::MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rooms_messages_index_url
    assert_response :success
  end

end
