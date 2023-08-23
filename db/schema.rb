# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_08_17_090331) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "combinations", force: :cascade do |t|
    t.integer "first_ingredient_id"
    t.integer "second_ingredient_id"
    t.integer "positive_rating", default: 0
    t.integer "negative_rating", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.text "description"
    t.string "color"
    t.string "image"
    t.index ["name"], name: "index_ingredients_on_name", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
