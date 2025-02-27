"""empty message

Revision ID: 8a20b2a49bff
Revises: 9c72a953421c
Create Date: 2019-06-18 09:48:08.241604

"""

# revision identifiers, used by Alembic.
revision = '8a20b2a49bff'
down_revision = '51e2c29ad95'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movie',
    sa.Column('title', sa.String(length=500), nullable=False),
    sa.Column('director', sa.String(length=300), nullable=False),
    sa.Column('original_language', sa.String(length=300), nullable=True),
    sa.Column('type', sa.String(length=300), nullable=True),
    sa.Column('date', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('title', 'director')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('movie')
    # ### end Alembic commands ###
