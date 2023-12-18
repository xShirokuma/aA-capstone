"""empty message

Revision ID: 6b8569b2cfc3
Revises: 8e3d260f6c71
Create Date: 2023-12-04 17:54:24.861429

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b8569b2cfc3'
down_revision = '8e3d260f6c71'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('board_saves',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('board_id', sa.Integer(), nullable=False),
    sa.Column('pin_id', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['board_id'], ['boards.id'], ),
    sa.ForeignKeyConstraint(['pin_id'], ['pins.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('saves', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('createdAt', sa.DateTime(), nullable=False))
        batch_op.add_column(sa.Column('updatedAt', sa.DateTime(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('saves', schema=None) as batch_op:
        batch_op.drop_column('updatedAt')
        batch_op.drop_column('createdAt')
        batch_op.drop_column('id')

    op.drop_table('board_saves')
    # ### end Alembic commands ###