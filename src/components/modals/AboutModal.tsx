import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game funnyfunnyabc -{' '}
        <a
          href="https://github.com/hannahcode/funnyfunnyabc"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/funnyfunnyabc/"
          className="underline font-bold"
        >
          play the original here
        </a>
      </p>
    </BaseModal>
  )
}
