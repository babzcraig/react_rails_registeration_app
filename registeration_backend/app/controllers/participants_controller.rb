class ParticipantsController < ApplicationController
  before_action :set_participant, only: [:show, :update, :destroy]

  # GET /participants
  def index
    @participants = Participant.all

    render json: @participants
  end

  # GET /participants/1
  def show
    puts "getting partiipant"
    puts @participant.to_yaml
    render json: @participant
  end

  # POST /participants
  def create
    @participant = Participant.new(participant_params)

    if @participant.save
      # Send phone and email here
      render json: @participant, status: :created, location: @participant
    else
      render json: @participant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /participants/1
  def update
    if @participant.update(participant_params)
      # If email or phone change, send a message

      render json: @participant
    else
      render json: @participant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /participants/1
  def destroy
    @participant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_participant
      @participant = Participant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def participant_params
      params.permit(:first_name, :last_name, :email, :phone)
    end

    def send_text_message
      client = Twilio::REST::Client.new(TWILIO_CONFIG['sid'], TWILIO_CONFIG['token'])
      puts "texting..."
      puts client.accounts.to_yaml
      # Create and send an SMS message
      # client.api.account.messages.create(
      #   from: TWILIO_CONFIG['from'],
      #   to: "+234#{@participant.phone}",
      #   body: "Welcome to the CFA and FMAN 5km Run - Walk! Your ID number is 00#{@participant.id}"
      # )
      UserNotifier.send_signup_email(@participant).deliver
    end

    def validate_particpant_params
      param! :first_name, String, required: true
      param! :last_name, String, required: true
      param! :phone, String, required: true
      param! :email, String, required: true
    end
end
