class Link < ApplicationRecord
  validates :original_url, presence: true, 
                           format: { with: URI::regexp(%w(http https)), message: 'Valid URL required' }, 
                           uniqueness: true
  validates :short_url, presence: true, uniqueness: true
  enum pinned: { unpinned: 0, pinned: 1 }
end
