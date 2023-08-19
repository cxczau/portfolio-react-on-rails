class ApplicationController < ActionController::Base
  # TODO: temp fix for csrf issue
  skip_before_action :verify_authenticity_token
end
