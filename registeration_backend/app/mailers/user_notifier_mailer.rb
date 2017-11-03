class UserNotifierMailer < ApplicationMailer
  default :from => 'hello@dreyahfit.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Before You Head Out Onto The Road!' )
  end
end
