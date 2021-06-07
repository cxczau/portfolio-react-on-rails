class PostsController < ApplicationController
  def index
    @posts = Post.all if request.format.json?
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      @post = Post.new # reset form
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
