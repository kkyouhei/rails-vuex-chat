require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get api_users_search_url
    assert_response :success
  end

end
