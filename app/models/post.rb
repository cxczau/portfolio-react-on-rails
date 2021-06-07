class Post < ApplicationRecord
  validates :title, :body, presence: true

  after_create_commit -> { BroadcastPostJob.perform_later(self.id) }
end
