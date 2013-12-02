class Task < ActiveRecord::Base
  attr_accessible :name, :done


  def done?
  	self.done
  end

  def done!
  	self.done = done? ? false : true
  end
end
