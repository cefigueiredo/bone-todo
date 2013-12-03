class Task < ActiveRecord::Base
  attr_accessible :name, :done

  belongs_to :todo_board

  def done?
  	self.done
  end

  def done!
  	self.done = done? ? false : true
  end
end
