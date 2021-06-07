class BroadcastPostJob < ApplicationJob
  queue_as :default

  def perform(post_id)
    post = Post.find(post_id)

    post_json = ActiveSupport::JSON.decode(
      ApplicationController.renderer.render(
        partial: 'posts/post.json.jbuilder',
        locals: { post: post }
      )
    )

    ActionCable.server.broadcast("posts", post_json)
  end
end
