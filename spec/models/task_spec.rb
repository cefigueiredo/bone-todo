require 'spec_helper'

describe Task do
  let(:task) { Task.new name: "Note what to do"}

  it "does not start as done" do
    expect(task.done?).to be_false
  end

  it "can be set as done" do
    task.done!
    expect(task.done?).to be_true
  end

  it "can be set as undone" do
    task.done!
    task.done!
    expect(task.done?).to be_false
  end

end
