require 'test_helper'

class ParticipantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @participant = participants(:one)
  end

  test "should get index" do
    get participants_url, as: :json
    assert_response :success
  end

  test "should create participant" do
    assert_difference('Participant.count') do
      post participants_url, params: { participant: { email: @participant.email, first_name: @participant.first_name, last_name: @participant.last_name, phone: @participant.phone } }, as: :json
    end

    assert_response 201
  end

  test "should show participant" do
    get participant_url(@participant), as: :json
    assert_response :success
  end

  test "should update participant" do
    patch participant_url(@participant), params: { participant: { email: @participant.email, first_name: @participant.first_name, last_name: @participant.last_name, phone: @participant.phone } }, as: :json
    assert_response 200
  end

  test "should destroy participant" do
    assert_difference('Participant.count', -1) do
      delete participant_url(@participant), as: :json
    end

    assert_response 204
  end
end
